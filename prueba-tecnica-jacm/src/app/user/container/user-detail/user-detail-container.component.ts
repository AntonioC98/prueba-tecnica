import { Component } from '@angular/core';
import { UserModel } from '../../data-access/model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../data-access/store/user.feature';

@Component({
  selector: 'ptj-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss']
})
export class UserDetailContainerComponent {

  selectedUser$ = this.store.select(UserFeature.selectSelectedUser);

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  /**
   * Method to go back to an specific route
   */
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
