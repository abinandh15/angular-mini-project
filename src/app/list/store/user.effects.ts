import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import { User } from "../models/user.model";
import { AppService } from "../services/app.service";
import { loadUsers, loadUsersError, loadUsersSuccess, searchUser, searchUserError, searchUserSuccess } from "./user.actions";


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private appService: AppService) {
    }
    loadUsers$ = createEffect(() => 
    this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => this.appService.getUsers().pipe(
          map(users => loadUsersSuccess({users})),
          catchError(() => [loadUsersError()])
        ))
      )
    );

    searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      switchMap(({searchQuery}) => this.appService.getUsers().pipe(
        map(users => searchUserSuccess({users:users.filter((user:User) => user.username.toLowerCase().includes(searchQuery.toLowerCase()))})),
        catchError((error) => {console.log(error);return[searchUserError()]})
      ))
    )
  );
}