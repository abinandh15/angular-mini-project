import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, debounceTime, delay, map, switchMap, take, takeUntil } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AppService } from '../services/app.service';
import { AppState } from './app.state';
import {
  loadUsers,
  loadUsersError,
  searchResultSuccess,
  searchUser,
  searchUserError,
  updateUsersSuccess,
} from './user.actions';
 
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private appService: AppService, private store$: Store<AppState>) {
  }
  // retrieve all users from api
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.appService.getUsers().pipe(
          map((users) => {
            console.log(users)
            return updateUsersSuccess({ searchResults: users, users: users.map((user:User)=>{return {id: user.id,name: user.name, username: user.username, website: user.website}}) })
          }),
          catchError(() => [loadUsersError()])
        )
      )
    )
  );

  searchUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(searchUser),
    switchMap(({ searchQuery }) =>
      this.store$.pipe(
        debounceTime(500),
        take(1),
        map((store) => {
          console.log(searchQuery);
          return searchResultSuccess({       
          users: [...store['user']['users']],   
          searchResults: store['user']['users'].filter((user: User) =>
              user?.username.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((user:User)=>{return {id: user.id,name: user.name, username: user.username, website: user.website}}),
          })}
        ),
        catchError(() => {
          return [searchUserError()];
        })
      )
    )
  )
);

}
