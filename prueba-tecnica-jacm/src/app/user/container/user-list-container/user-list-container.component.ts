import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModuleActions } from '../../data-access/store/user.actions';
import { UserFeature } from '../../data-access/store/user.feature';
import { UserModel } from '../../data-access/model/user.model';

@Component({
  selector: 'ptj-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  listUserModel$ = this.store.select(UserFeature.selectListUserModel);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  /**
   * Method used to call the action to get user list
   */
  ngOnInit(): void {
    this.store.dispatch(UserModuleActions.UserActions.getUser());
  }

  /**
   * Method used to set the selected user on the state and redirect to detail page
   * @param userId Selected user ID
   */
  viewDetail(userModel: UserModel) {
    this.store.dispatch(UserModuleActions.UserActions.selectUser({ userModel }));
    this.router.navigate(['../detail/' + userModel.id], { relativeTo: this.activatedRoute });
  }
}
