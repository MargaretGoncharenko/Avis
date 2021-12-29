import {v1} from "uuid";
import {AllActionTypes} from "./AllActionTypes";

type LocationPropsType = {
    city: string
    country: string
}
export type UserPropsType = {
    id: string
    photo:string
    followed: boolean
    fullName: string
    status: string
    location: LocationPropsType
}
type UsersPagePropsType = {
    users: Array<UserPropsType>

}
export type InitialUsersStateType = UsersPagePropsType

const initialState: InitialUsersStateType = {
    users: [
        {
            id: v1(),
            photo: "https://cdn.britannica.com/15/186115-050-22AB26CB/Ava-Gardner-Pandora-Flying-Dutchman-Albert-Lewin.jpg",
            followed: true,
            fullName: "Helen Novikova",
            status: "Hello",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            photo: "https://www.gannett-cdn.com/presto/2021/02/12/NATR/7e6a5046-007e-480c-b707-e1f59dc7412c-Ava_Hawthorne_photo.jpg",
            followed: false,
            fullName: "Svetlana Zakharava",
            status: "I'm a boss",
            location: {city: "Voronezh", country: "Russia"}
        },
        {
            id: v1(),
            photo: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/02/ava1-e1582642292609.png",
            followed: true,
            fullName: "Amalia Melejin",
            status: "I like pets",
            location: {city: "Lviv", country: "Ukraine"}
        },
    ],

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
            return {...state, users: {...state.users, ...action.users}}
        default:
            return state
    }
}

export const FollowAC = (userId: string) => ({type: "FOLLOW", userId}) as const
export const UnfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const SetUsersAC = (users: Array<UserPropsType>) => ({type: "SET-USERS", users}) as const

