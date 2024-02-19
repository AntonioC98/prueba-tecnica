import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './container/user-list-container/user-list-container.component';
import { UserDetailContainerComponent } from './container/user-detail/user-detail-container.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListContainerComponent
  },
  {
    path: 'detail/:userId',
    component: UserDetailContainerComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
