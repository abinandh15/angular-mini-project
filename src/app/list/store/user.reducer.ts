import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { updateUsersSuccess } from './user.actions';

export interface UserState {
  [id: string]: User;
}

export const listFeatureKey = 'user';

export interface UserRootState {
  [listFeatureKey]: UserState;
}

const initialState: UserState = {
  user: { id: '', name: '', username: '', website: '' },
};

export const userReducer = createReducer(
  initialState,
  on(updateUsersSuccess, (state, { users }) =>
    users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
  )
);
