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
}
export type InitialUsersStateType = UsersPagePropsType

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const FollowAC = (userId: string) => ({type: "FOLLOW", userId}) as const
export const UnfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const SetUsersAC = (users: Array<UserPropsType>) => ({type: "SET-USERS", users}) as const
export const SetCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const SetTotalUsersCountAC = (totalUsersCount: number) => ({type: "TOTAL-USERS-COUNT", totalUsersCount}) as const
