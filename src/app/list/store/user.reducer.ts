import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import { loadUsersSuccess, searchUserSuccess } from "./user.actions";

export interface UserState {
    [id: string]: User;
}

export const listFeatureKey = "user";

export interface UserRootState {
    [listFeatureKey]: UserState;
}

const initialState: UserState = { user: { id: '', name:'', username: '' } };

export const userReducer = createReducer(
    initialState,
    on(loadUsersSuccess, (state, {users}) => users.reduce((acc, user) => ({...acc, [user.id]: user}), {})),
    on(searchUserSuccess, (state, {users}) => users.reduce((acc, user) => ({...acc, [user.id]: user}), {})),

)