import { ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Action, ActionCreator } from "redux";
import { RootState } from "../reducer";
import { updateRedirect } from "../actions"

export type MeActions = MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
  type: typeof ME_REQUEST,
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
});


export interface IUserData {
  name?: string;
  iconImg?: string;
}
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS,
  data: IUserData,
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
});


export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR,
  error: string,
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
});



export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  dispatch(updateRedirect(false))
  axios.get('https://oauth.reddit.com/api/v1/me?raw__json=1', {
    headers: { Authorization: `bearer ${getState().token}` }
  })
    .then((resp) => {
      const userData = resp.data;
      if (userData.icon_img) {
        const myUserData = { name: userData.name, iconImg: userData.icon_img.split('?')[0] };
        dispatch(meRequestSuccess(myUserData));
        dispatch(updateRedirect(true))
      }
    })
    .catch((err) => {
      console.log(err)
      dispatch(meRequestError(String(err)));
    })
}