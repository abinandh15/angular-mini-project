import { createFeatureSelector, createSelector } from '@ngrx/store';
import { listFeatureKey, UserRootState, UserState } from './user.reducer';

const selectUserFeature = createFeatureSelector<UserRootState, UserState>(
  listFeatureKey
);

export const selectUsers = createSelector(selectUserFeature, (state) =>
  Object.values(state.users)
);

export const selectSearchResult = createSelector(selectUserFeature, (state) =>
  Object.values(state.searchResults)
);