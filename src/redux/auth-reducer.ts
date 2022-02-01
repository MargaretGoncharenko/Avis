import {AllActionTypes} from "./AllActionTypes";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type InitialAuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialAuthStateType = initialState, action: AllActionTypes): InitialAuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export const setAuthUserData = (data: DataType) => ({type: "SET-AUTH-USER-DATA", data} as const)
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setAuthUserData({id, email, login}))
            }
        })
}