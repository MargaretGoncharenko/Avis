import {AllActionTypes} from "./AllActionTypes";

type LocationPropsType = {
    city: string
    country: string
}
type photosPropsType = {
    small: string
    large: string
}
export type UserPropsType = {
    id: string
    photos: photosPropsType
    followed: boolean
    name: string
    status: string
    location: LocationPropsType
}
type UsersPagePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type InitialUsersStateType = UsersPagePropsType

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: AllActionTypes): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: string) => ({type: "FOLLOW", userId}) as const
export const unfollow = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: Array<UserPropsType>) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({type: "TOTAL-USERS-COUNT", totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
