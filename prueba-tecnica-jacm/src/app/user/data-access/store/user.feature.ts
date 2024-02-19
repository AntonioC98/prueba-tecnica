import { createFeature, createReducer, on } from '@ngrx/store';
import { UserModel } from '../model/user.model';
import { UserModuleActions } from './user.actions';

// Identifier
export const USER_KEY = 'userFeature';

// State structure and initial values for the state
export interface UserState {
  listUserModel: Array<UserModel>;
  selectedUser: UserModel
}

export const initialState: UserState = {
  listUserModel: new Array<UserModel>(),
  selectedUser: new UserModel()
};

// Exposed feature to create the reducer and its selectors
export const UserFeature = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(
      UserModuleActions.UserActions.getUserSuccess,
      (state, { listUserModel }): UserState => ({
        ...state,
        listUserModel: listUserModel,
      })
    ),
    on(
      UserModuleActions.UserActions.selectUser,
      (state, { userModel }): UserState => ({
        ...state,
        selectedUser: userModel,
      })
    ),
  ),
});
