import {AllActionTypes} from "./AllActionTypes";

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