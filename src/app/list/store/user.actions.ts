import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[] }>());
export const loadUsersError = createAction('[User List] Load Users Error');

export const sortUsers = createAction('[User List] Sort Users', props<{ users: User[] }>())