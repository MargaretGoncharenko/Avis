import React from "react";
import {connect} from "react-redux";
import {AddPostAC, InitialProfileStateType, UpdatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: InitialProfileStateType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    onPostChange: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText))
        },
        onPostChange: (value: string) => {
            dispatch(UpdatePostTextAC(value))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
