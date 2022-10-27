import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import {LocatorService} from '../../../../warehouse/services/locator.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ListService} from '../../../../warehouse/services/list.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.scss']
})
export class CompleteListComponent implements OnInit {

  groupLocators = [];
  locatorsMap = {};
  form: FormGroup;

  constructor(
    private locatorService: LocatorService,
    private dialogRef: MatDialogRef<CompleteListComponent>,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ListService,
    private adapterService:AdapterService) {
    if(this.data.type=='edit'){
      this.form = fb.group({
        locator: [null, Validators.required]
      });
      this.locatorService.getAll().pipe(take(1)).subscribe(res => {

        res.forEach(element => {
          if (this.locatorsMap[element.warehouse.id]) {
            this.locatorsMap[element.warehouse.id].items.push({ label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place, value: element.id });
          } else {
            this.locatorsMap[element.warehouse.id] = {};
            this.locatorsMap[element.warehouse.id].label = element.warehouse.name;
            this.locatorsMap[element.warehouse.id].value = element.warehouse.id;
            this.locatorsMap[element.warehouse.id].items = [];
            this.locatorsMap[element.warehouse.id].items.push({ label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place, value: element.id });
          }
        })
        Object.keys(this.locatorsMap).forEach(id => {
          this.groupLocators.push(this.locatorsMap[id])
        })
        this.groupLocators = this.groupLocators.filter(x => { return x.value == 5 || x.value == 6 || x.value == 7 })
      })
    }

    if(this.data.type=='date'){
      this.form = fb.group({
        id: [this.data.entity.list, Validators.required],
        completed: [new Date(this.data.entity.completed), Validators.required]
      });
    }

  }

  ngOnInit(): void {
  }

  complete() {
    this.listService.process(this.form.value, this.data.entity.id).subscribe(process => {
      this.dialogRef.close(true)
    })
  }

  setDate() {
    let send = this.form.value;
    send.completed = this.adapterService.dateTimeAdapter(this.form.value.completed);
    this.listService.updatePartly(send).subscribe(process => {
      this.dialogRef.close(true)
    })
  }
}
