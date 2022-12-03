import { ThunkAction } from "@reduxjs/toolkit";
import { Action, ActionCreator } from "redux";
import { MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction} from "./me/actions"
import { RootState } from "./reducer";

export type RootActions = UpdateCommentAction 
    | SetTokenAction 
    | MeRequestAction 
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | UpdateRedirectAction;

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string,
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});


const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string,
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
    type: SET_TOKEN,
    token,
});


const UPDATE_REDIRECT = 'UPDATE_REDIRECT';
type UpdateRedirectAction = {
    type: typeof UPDATE_REDIRECT,
    redirect: boolean,
}
export const updateRedirect: ActionCreator<UpdateRedirectAction> = (redirect) => ({
    type: UPDATE_REDIRECT,
    redirect,
});

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const token = localStorage.getItem('token') || window.__token__;
    dispatch(setToken(token));
    if (token && token !== 'undefined') {
      localStorage.setItem('token', token);
    }
}