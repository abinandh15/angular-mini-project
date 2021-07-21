import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AppService } from '../services/app.service';
import {
  loadUsers,
  loadUsersError,
  searchUser,
  searchUserError,
  updateUsersSuccess,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private appService: AppService) {}
  // retrieve all users from api
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.appService.getUsers().pipe(
          map((users) => updateUsersSuccess({ users })),
          catchError(() => [loadUsersError()])
        )
      )
    )
  );

  // search user by name
  searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      switchMap(({ searchQuery }) =>
        this.appService.getUsers().pipe(
          map((users) =>
            updateUsersSuccess({
              users: users.filter((user: User) =>
                user.username.toLowerCase().includes(searchQuery.toLowerCase())
              ),
            })
          ),
          catchError((error) => {
            console.log(error);
            return [searchUserError()];
          })
        )
      )
    )
  );
}
