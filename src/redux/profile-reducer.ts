import {v1} from "uuid";
import {AllActionTypes} from "./AllActionTypes";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    profile: ProfileProps
    status: string
}
export type ProfileProps = {
    photos: PhotosType
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
}
type PhotosType = {
    large: string
    small: string
}
type ContactsType = {
    "facebook": string
    "website": string
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string
}
export type InitialProfileStateType = ProfilePagePropsType

const initialState: InitialProfileStateType = {
    posts: [
        {id: v1(), postText: "Hi! How are you?", likesCount: 21},
        {id: v1(), postText: "Hello everyone!", likesCount: 45},
        {id: v1(), postText: "It's my first post.", likesCount: 28},
    ],
    newPostText: "",
    profile: {
        photos: {
            large: "",
            small: "",
        },
        contacts: {
            "facebook": "",
            "website": "",
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": "",
            "github": "",
            "mainLink": "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 1,
    },
    status: "",
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: AllActionTypes): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST-TO-STATE":
            return {
                ...state,
                newPostText: "",
                posts: [
                    {
                        id: v1(),
                        postText: action.newPostText,
                        likesCount: 0,
                    },
                    ...state.posts
                ]
            }
        case  "UPDATE-POST-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}
export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST-TO-STATE",
        newPostText: newPostText
    } as const
}
export const UpdatePostTextAC = (newPostText: string) => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: newPostText
    } as const
}


export const setUserProfile = (profile: ProfileProps) => ({type: "SET-USER-PROFILE", profile}) as const

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}

export const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}