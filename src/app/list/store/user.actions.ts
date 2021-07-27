import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

// actions for fetching and updating users
export const loadUsers = createAction('[User List] Load Users');
export const updateUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[]; searchResults: User[] }>()
);
export const loadUsersError = createAction('[User List] Load Users Error');

export const updateUsers = createAction(
  '[User List] update User',
  props<{ previousIndex: number; currentIndex: number }>()
);

export const sortUsers = createAction(
  '[User List] sort User',
  props<{ columnId: string; sortHelper: boolean }>()
);

// actions for search user
export const searchUser = createAction(
  '[User List] Search Users',
  props<{ searchQuery: string }>()
);
export const searchResultSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[]; searchResults: User[] }>()
);
export const searchUserError = createAction('[User List] Search Users Error');
