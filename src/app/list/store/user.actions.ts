import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

// actions for fetching and updating users
export const loadUsers = createAction('[User List] Load Users');
export const updateUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction('[User List] Load Users Error');

// actions for search user
export const searchUser = createAction(
  '[User List] Search Users',
  props<{ searchQuery: string }>()
);
export const searchResultSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[], searchResults: User[] }>()
);
export const searchUserError = createAction('[User List] Search Users Error');
