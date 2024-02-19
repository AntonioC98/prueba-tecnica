import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserModel } from '../model/user.model';

const UserActions = createActionGroup({
  source: 'User API',
  events: {
    'Get User': emptyProps(),
    'Get User Success': props<{ listUserModel: Array<UserModel> }>(),
    'Get User Failure': props<{ error: string }>(),
    'Get User Clean': emptyProps(),
    'Select User': props<{ userModel: UserModel }>()
  },
});

export const UserModuleActions = {
  UserActions: UserActions
};
