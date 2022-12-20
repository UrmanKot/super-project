import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CorrespondentLayoutComponent} from './components/correspondent-layout/correspondent-layout.component';
import {CorrespondentTypes} from './enum/correspondent-types.enum';
import {CorrespondentListComponent} from './components/correspondent-list/correspondent-list.component';
import {
  CorrespondentCategoryListComponent
} from './components/correspondent-category-list/correspondent-category-list.component';

const routes: Routes = [{
  path: '',
  title: 'Correspondents',
  component: CorrespondentLayoutComponent, children: [
    {
      path: 'incoming-correspondent',
      title: 'Incoming Correspondent',
      data: {type: CorrespondentTypes.INCOMING},
      component: CorrespondentListComponent
    },
    {
      path: 'outgoing-correspondent',
      title: 'Outgoing Correspondent',
      data: {type: CorrespondentTypes.OUTGOING},
      component: CorrespondentListComponent
    },
    {
      path: 'incoming-categories',
      title: 'Incoming Categories',
      data: {type: CorrespondentTypes.INCOMING},
      component: CorrespondentCategoryListComponent
    },
    {
      path: 'outgoing-categories',
      title: 'Outgoing Categories',
      data: {type: CorrespondentTypes.OUTGOING},
      component: CorrespondentCategoryListComponent
    },
    {path: '', redirectTo: 'incoming-correspondent', pathMatch: 'full'},
    {path: '**', redirectTo: 'incoming-correspondent', pathMatch: 'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondentRoutingModule { }
