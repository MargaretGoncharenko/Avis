import React from "react";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage;
                const addPost = () => {
                    store.dispatch(AddPostAC(state.newPostText))
                }
                const onPostChange = (value: string) => {
                    store.dispatch(UpdatePostTextAC(value))
                }
                return (
                    <MyPosts updatePostText={onPostChange}
                             addPost={addPost}
                             posts={state.posts}
                             newPostText={state.newPostText}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}
