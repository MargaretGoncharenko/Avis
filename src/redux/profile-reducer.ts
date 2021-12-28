import {v1} from "uuid";
import {AllActionTypes} from "./store";

type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type InitialProfileStateType = ProfilePagePropsType

const initialState: InitialProfileStateType = {
    posts: [
        {id: v1(), postText: "Hi! How are you?", likesCount: 21},
        {id: v1(), postText: "Hello everyone!", likesCount: 45},
        {id: v1(), postText: "It's my first post.", likesCount: 28},
    ],
    newPostText: ""
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: AllActionTypes): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST-TO-STATE":
            const newPost: PostPropsType = {
                id: v1(),
                postText: action.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return {...state}
        case  "UPDATE-POST-TEXT":
            // state.newPostText = action.newText;
            return {...state, newPostText: action.newText}
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

