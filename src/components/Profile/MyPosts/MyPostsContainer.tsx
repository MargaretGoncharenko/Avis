import React from "react";
import {ProfilePagePropsType} from "../../../redux/store";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";
import {RootStoreType} from "../../../redux/redux-store";

type MyPostsContainerProps = {
    posts: ProfilePagePropsType
    newPostText: string
    store: Store<RootStoreType, any>
}
export const MyPostsContainer = (props: MyPostsContainerProps) => {

    const posts = props.posts
    const addPost = () => {
        props.store.dispatch(AddPostAC(props.newPostText))
    }
    const onPostChange = (value: string) => {
        props.store.dispatch(UpdatePostTextAC(value)
        )
    }
    return (
        <MyPosts updatePostText={onPostChange}
                 addPost={addPost}
                 posts={posts}
                 newPostText={props.newPostText}
        />

    )
}