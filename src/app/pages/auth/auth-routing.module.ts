import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainer } from '@app/pages/auth/containers/auth.container';

const routes: Routes = [
  {
    path: '',
    component: AuthContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
