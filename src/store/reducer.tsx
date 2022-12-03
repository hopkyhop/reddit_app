import { Reducer } from "redux"
import { RootActions } from "./actions";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reduces";

export type RootState = {
    commentText: string,
    token: string,
    redirect: boolean,
    me: MeState,
}

const initialState: RootState = {
    commentText: 'Это интересно!',
    token: '',
    redirect: false,
    me: {
        loading: false,
        error: '',
        data: {}
    },
}

export const rootReducer: Reducer<RootState, RootActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return {
                ...state,
                commentText: action.text,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'UPDATE_REDIRECT':
            return {
                ...state,
                redirect: action.redirect,
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }
        default:
            return state
    }
}

