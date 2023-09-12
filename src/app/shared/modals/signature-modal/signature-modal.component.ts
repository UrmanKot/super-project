import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgSignaturePadOptions, SignaturePadComponent} from '@almothafar/angular-signature-pad';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pek-signature-modal',
  templateUrl: './signature-modal.component.html',
  styleUrls: ['./signature-modal.component.scss']
})
export class SignatureModalComponent implements OnInit, AfterViewInit {

  @ViewChild('signature')
  public signaturePad: SignaturePadComponent;

  signaturePadOptions: NgSignaturePadOptions = {
    minWidth: 5,
    canvasWidth: 300,
    canvasHeight: 200,
    backgroundColor: '#fff'
  };

  form: FormGroup = this.fb.group({
    fullName: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public modalData: { headerTitle: string },
    private dialogRef: MatDialogRef<SignatureModalComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }

  sign() {
    console.log('Invalid ', this.form.invalid);
    this.dialogRef.close({
      result: {
        fullName: this.form.get('fullName').value,
        signature: this.getFileFromBase64(this.signaturePad.toDataURL(), 'signature.jpg')
      }
    });
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    // console.log('Start drawing', event);
  }

  clear() {
    this.signaturePad.clear();
  }

  getFileFromBase64(string64: string, fileName: string) {
    const trimmedString = string64.replace('data:image/png;base64,', '');
    const imageContent = atob(trimmedString);
    const buffer = new ArrayBuffer(imageContent.length);
    const view = new Uint8Array(buffer);

    for (let n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
    const type = 'image/jpg';
    const blob = new Blob([buffer], {type});
    return new File([blob], fileName, {lastModified: new Date().getTime(), type});
  }
}
