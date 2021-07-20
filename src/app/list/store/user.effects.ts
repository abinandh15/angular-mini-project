import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "src/app/services/app.service";
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import { loadUsers, loadUsersError, loadUsersSuccess } from "./user.actions";


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
}