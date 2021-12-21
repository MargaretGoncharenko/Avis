import {v1} from "uuid";
import {PostPropsType, ProfileActionTypes, ProfilePagePropsType} from "./state";

export const profileReducer = (state: ProfilePagePropsType, action: ProfileActionTypes) => {
    switch (action.type) {
        case "ADD-POST-TO-STATE":
            const newPost: PostPropsType = {
                id: v1(),
                postText: action.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case  "UPDATE-POST-TEXT":
            state.newPostText = action.newText;
            return state;
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