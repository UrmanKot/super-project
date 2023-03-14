import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WarehouseService} from '../../../warehouse/services/warehouse.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Warehouse} from '../../../warehouse/models/warehouse';
import {QcProtocol} from '../../models/protocol';
import {ProtocolService} from '../../services/protocol.service';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-create-edit-protocol',
  templateUrl: './create-edit-protocol.component.html',
  styleUrls: ['./create-edit-protocol.component.scss']
})
export class CreateEditProtocolComponent implements OnInit {
  isSaving = false;
  isLoadingParagraphs = false;

  defaultParagraphsIds = new Set<number>();
  removeFilesSet: Set<number> = new Set<number>();

  files = [];
  defaultFiles = [];

  form: FormGroup = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    comment: ['', Validators.required],
    paragraphs: this.fb.array([]),
    nomenclatures: [[]]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly protocolService: ProtocolService,
    private dialogRef: MatDialogRef<CreateEditProtocolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, protocol: QcProtocol, isShowMode: boolean }
  ) { }

  get paragraphs() {
    return this.form.get('paragraphs') as FormArray;
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.protocol);
      this.getParagraphs();
      this.getFiles();
    } else {
      this.addParagraph();
    }
  }

  getParagraphs() {
    this.isLoadingParagraphs = true;
    this.protocolService.getParagraphs([{name: 'protocol_ids', value: this.form.get('id').value}]).subscribe(paragraphs => {
      paragraphs.forEach(paragraph => {
        this.defaultParagraphsIds.add(paragraph.id);

        (this.form.get('paragraphs') as FormArray).push(this.fb.group({
          id: [paragraph.id],
          name: [paragraph.name, Validators.required],
          comment: [paragraph.comment]
        }));
      });

      this.isLoadingParagraphs = false;
    });
  }

  addParagraph() {
    (this.form.get('paragraphs') as FormArray).push(this.fb.group({
      id: [null],
      name: [null, Validators.required],
      comment: ['']
    }));
  }

  getFiles() {
    if (this.data.type === 'edit') {
      this.protocolService.getFiles([{name: 'qc_protocol_id', value: this.form.get('id').value}]).subscribe(files => {
        this.files = files.map(file => {
          return {
            ...file,
            name: this.getFileName(file.file),
          };
        });

        this.defaultFiles = [...this.files]
      });
    }
  }

  getFileName(fileName: string) {
    if (fileName) {
      const name = fileName.split('/');
      return name[name.length - 1];
    }
  }

  removeNomenclature(id: number) {
    const index = this.form.get('nomenclatures').value.findIndex(n => n.id === id);
    this.form.get('nomenclatures').value.splice(index, 1);
  }

  getType(type) {
    switch (type) {
      case '0':
        return 'Purchased';
      case '1':
        return 'Assembly';
      case '2':
        return 'Manufactured';
    }
  }

  onSave() {
    if (this.data.type === 'create') {
      this.createProtocol();
    } else {
      this.editProtocol()
    }
  }

  addNomenclature() {
    this.protocolService.addNomenclatureDialog().pipe(
      filter(value => Boolean(value))
    ).subscribe(nomenclature => {
      this.form.get('nomenclatures').value.push({
        id: nomenclature.id,
        name: nomenclature.name,
        code: nomenclature.code,
        type: nomenclature.type
      });
    })
  }

  createProtocol() {
    if (this.form.valid) {
      this.isSaving = true;
      const sendData = JSON.parse(JSON.stringify(this.form.value));
      delete sendData.nomenclatures;
      delete sendData.id;
      this.protocolService.create(sendData).subscribe(protocol => {

        const send = this.paragraphs.controls.map(control => {
          delete control.value.id;
          control.value.protocol_id = protocol.id;
          return control.value;
        });

        this.protocolService.addParagraphs(send).subscribe();
        this.saveFiles(protocol.id.toString());

        if (this.form.get('nomenclatures').value.length > 0) {
          const nomenclatures = {
            nomenclature_ids: this.form.get('nomenclatures').value.map(el => el.id)
          };
          this.protocolService.addNomenclature(nomenclatures, protocol.id).pipe(
            tap(() => this.isSaving = false)
          ).subscribe(() => this.dialogRef.close(true));
        } else {
          this.isSaving = false;
          this.dialogRef.close(true);
        }
      });
    }
  }

  saveFiles(protocolId: string) {
    this.files.forEach((file, idx) => {
      if (!file?.id) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('qc_protocol', protocolId);

        this.protocolService.saveFile(formData).subscribe();
      }
    });
  }

  onSelectFiles(files: File[]) {
    this.files = files;
  }

  private editProtocol() {
    if (this.form.value) {
      this.isSaving = true;

        const sendData = JSON.parse(JSON.stringify(this.form.value));
        delete sendData.nomenclatures;

        this.protocolService.update(sendData).subscribe();

        const addedParagraphs = this.paragraphs.controls.filter(c => c.value.id === null).map(control => {
          control.value.protocol_id = this.form.get('id').value;
          return control.value;
        });

        this.protocolService.addParagraphs(addedParagraphs).subscribe();

        const updatedParagraphsIds = this.paragraphs.controls.filter(c => this.defaultParagraphsIds.has(c.value.id)).map(c => c.value);

        this.protocolService.updateParagraphs(updatedParagraphsIds).subscribe();

        this.paragraphs.controls
          .forEach(c => {
            if (this.defaultParagraphsIds.has(c.value.id)) {
              this.defaultParagraphsIds.delete(c.value.id);
            }
          });

        this.saveFiles(this.form.get('id').value);
        this.deleteFiles();

        const removedParagraphsIds = Array.from(this.defaultParagraphsIds);
        this.protocolService.deleteParagraphs(removedParagraphsIds).subscribe();

        if (this.form.get('nomenclatures').value.length >= 0) {
          const send = {
            nomenclature_ids: this.form.get('nomenclatures').value.length ? this.form.get('nomenclatures').value.map(el => el.id) : ''
          };
          this.protocolService.addNomenclature(send, this.form.get('id').value).subscribe(() => {
            this.isSaving = false;
            this.dialogRef.close(true);
          });
        } else {
          this.isSaving = false;
          this.dialogRef.close(true);
        }
    }
  }

  deleteFiles() {
    this.defaultFiles.filter(file => file?.id && !this.files.find(f => f.id === file.id)).map(f => f.id).forEach(id => {
      this.protocolService.deleteFile(id).subscribe();
    });
  }
}
