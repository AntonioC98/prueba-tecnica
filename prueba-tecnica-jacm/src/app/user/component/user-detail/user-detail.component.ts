import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../../data-access/model/user.model';
import { ButtonColorEnum } from 'src/app/shared/enum/button-color.enum';
import { ButtonTypeEnum } from 'src/app/shared/enum/button-type.enum';
import { Observable } from 'rxjs';


@Component({
  selector: 'ptj-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() selectedUser$: Observable<UserModel> | undefined;
  @Output() goBackEvent: EventEmitter<any> = new EventEmitter();

  buttonTypeEnum = ButtonTypeEnum;
  buttonColorEnum = ButtonColorEnum;

  backgroundColor = '#3f51b5';

  /**
   * Method used to emit go back event to container
   */
  goBack() {
    this.goBackEvent.emit();
  }

}
