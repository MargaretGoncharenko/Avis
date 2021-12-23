import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import {RootStoreType} from "../../redux/redux-store";

export type postsDataProps = {
    profilePage: ProfilePagePropsType
    newPostText: string
    store: Store<RootStoreType, any>
}

export const Profile = (props: postsDataProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                posts={props.profilePage}
                newPostText={props.newPostText}
            />
        </div>
    )
}