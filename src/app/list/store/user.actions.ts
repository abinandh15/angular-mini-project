import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[] }>());
export const loadUsersError = createAction('[User List] Load Users Error');

export const searchUser = createAction('[User List] Search Users',props<{searchQuery: string}>());
export const searchUserSuccess = createAction('[User List] Search Users Success', props<{ users: User[] }>());
export const searchUserError = createAction('[User List] Search Users Error');