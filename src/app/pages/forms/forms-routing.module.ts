import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsContainerComponent } from '@forms/container/forms-container.container';

export const formRoot = 'forms';

const routes: Routes = [{
  path: '',
  component: FormsContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
