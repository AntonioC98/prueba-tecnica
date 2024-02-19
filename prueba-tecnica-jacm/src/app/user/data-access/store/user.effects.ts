import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { UserApiService } from '../api/user-api';
import { UserModuleActions } from './user.actions';
import { UserEntity } from '../entity/user.entity';
import { UserMapper } from '../mapper/user.mapper';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
    private userMapper: UserMapper
  ) { }

  getlistUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserModuleActions.UserActions.getUser),
      mergeMap(() => {
        return this.userApiService.getUserList().pipe(
          mergeMap((listUserEntity: Array<UserEntity>) => {
            return of(
              UserModuleActions.UserActions.getUserSuccess({
                listUserModel: this.userMapper.ListUserToMapper(listUserEntity),
              })
            );
          })
        );
      })
    );
  });
}
