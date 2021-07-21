import { createFeatureSelector, createSelector } from '@ngrx/store';
import { listFeatureKey, UserRootState, UserState } from './user.reducer';

const selectUserFeature = createFeatureSelector<UserRootState, UserState>(
  listFeatureKey
);

export const selectUsers = createSelector(selectUserFeature, (state) =>
  Object.keys(state).map((key) => state[key])
);
