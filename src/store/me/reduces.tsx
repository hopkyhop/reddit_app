import { Reducer } from "redux"
import { IUserData, MeActions, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./actions"

export type MeState = {
    loading: boolean,
    data: IUserData,
    error: string
}

const meInitialState: MeState = {
    loading: false,
    error: '',
    data: {}
}

export const meReducer: Reducer<MeState, MeActions> = (state = meInitialState, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case ME_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                loading: false
            }
    }
}