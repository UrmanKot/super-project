import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'pek-create-edit-role',
  templateUrl: './create-edit-role.component.html',
  styleUrls: ['./create-edit-role.component.scss']
})
export class CreateEditRoleComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: [null, Validators.required],
  });


  constructor(
    private readonly fb: FormBuilder,
    private readonly roleService: RoleService,
    private dialogRef: MatDialogRef<CreateEditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, role: Role }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.role.id));
      this.form.patchValue(<any>this.data.role)
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createRole();
        break;
      }
      case 'edit': {
        this.editRole();
        break;
      }
    }
  }

  createRole() {
    const send = <any>this.form.value;
    this.roleService.createRole(send).subscribe({
      next: user => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    });
  }

  editRole() {
    const send = <any>this.form.value;

    this.roleService.editRole(send).subscribe({
      next: user => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    });
  }

}
