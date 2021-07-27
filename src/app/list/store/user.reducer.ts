import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { searchResultSuccess, updateUsersSuccess } from './user.actions';

export interface UserState {
  users : User[];
  searchResults: User[];
}

export const listFeatureKey = 'user';

export interface UserRootState {
  [listFeatureKey]: UserState;
}

const initialState: UserState = {
  users : [{ id: '', name: '', username: '', website: '' }],
  searchResults: [{ id: '', name: '', username: '', website: '' }]
};

export const userReducer = createReducer(
  initialState,
  on(updateUsersSuccess, (state, { users, searchResults }) => ({ ...state, users, searchResults })),
  on(searchResultSuccess, (state, { users, searchResults }) => ({ ...state, users, searchResults }))
);
