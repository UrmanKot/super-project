import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NomenclaturesFileService} from '@shared/services/nomenclatures-file.service';
import {combineLatest, forkJoin, Subject, takeUntil} from 'rxjs';
import {NomenclatureFile} from '@shared/models/nomenclature';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {UploadFilePickerComponent} from '@shared/components/upload-file-picker/upload-file-picker.component';

@Component({
  selector: 'pek-nomenclature-files',
  templateUrl: './nomenclature-files.component.html',
  styleUrls: ['./nomenclature-files.component.scss']
})
export class NomenclatureFilesComponent implements OnInit, OnDestroy {
  @ViewChild('filePicker') filePicker: UploadFilePickerComponent;
  @Input() nomenclatureId: number;
  private destroy$ = new Subject();
  files: NomenclatureFile[];
  selectedFile: NomenclatureFile;
  menuItems: MenuItem[] = [{
    label: 'Selected Files',
    items: [
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteFile()
      }
    ]
  }];
  constructor(
    private nomenclatureFileService: NomenclaturesFileService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles() {
    this.nomenclatureFileService.get([{name: 'nomenclature', value: this.nomenclatureId}])
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.files = res;
        console.log('this.files', this.files);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  filesChanged(files: File[]) {
    const filesToAddCall = [];
    files.forEach(file => {
      filesToAddCall.push(this.nomenclatureFileService.create({nomenclature: this.nomenclatureId, file}));
    });
    const observable = forkJoin([
      ...filesToAddCall
    ]);

    observable.pipe(takeUntil(this.destroy$)).subscribe({
      next: value => {
        this.filePicker.clearFiles();
        this.loadFiles();
      },
      complete: () => {

      },
    });
  }

  private deleteFile() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.nomenclatureFileService.delete(this.selectedFile.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.selectedFile = null;
          this.loadFiles();
        });
      }
    });
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  printFileAdded(file: File) {
    this.nomenclatureFileService.create({nomenclature: this.nomenclatureId, file}).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.filePicker.clearFiles();
      this.loadFiles();
    });
  }
}
