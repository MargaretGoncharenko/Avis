import {v1} from "uuid";
import {AllActionTypes} from "./AllActionTypes";


type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    profile: ProfileProps
}

export type ProfileProps = {
    photos: PhotosType
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId?: number
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
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",

    }
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