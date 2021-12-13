import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/state";

export type postsDataProps = {
    profilePage: ProfilePagePropsType
    addPostToState: (postMessage: string) => void
    newPostText: string
    updatePostText: (newText: string) => void
}

export const Profile = (props: postsDataProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage}
                     newPostText={props.newPostText}
                     addPostToState={props.addPostToState}
                     updatePostText={props.updatePostText}
            />
        </div>
    )
}