import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrespondentRoutingModule } from './correspondent-routing.module';
import { CorrespondentLayoutComponent } from './components/correspondent-layout/correspondent-layout.component';
import {LayoutModule} from '../layout/layout.module';
import { CorrespondentListComponent } from './components/correspondent-list/correspondent-list.component';
import { CorrespondentCategoryListComponent } from './components/correspondent-category-list/correspondent-category-list.component';
import {SharedModule} from '@shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateEditCorrespondnetCategoryComponent } from './modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component';
import { CorrespondnetCategoriesPickerComponent } from './components/correspondnet-categories-picker/correspondnet-categories-picker.component';
import {TreeSelectModule} from 'primeng/treeselect';
import { CreateEditCorrespondentComponent } from './modals/create-edit-correspondent/create-edit-correspondent.component';


@NgModule({
  declarations: [
    CorrespondentLayoutComponent,
    CorrespondentListComponent,
    CorrespondentCategoryListComponent,
    CreateEditCorrespondnetCategoryComponent,
    CorrespondnetCategoriesPickerComponent,
    CreateEditCorrespondentComponent
  ],
  imports: [
    CommonModule,
    CorrespondentRoutingModule,
    LayoutModule,
    SharedModule,
    DragDropModule,
    TreeSelectModule,
  ]
})
export class CorrespondentModule { }
