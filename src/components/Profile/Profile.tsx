import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/state";

export type postsDataProps = {
    posts: ProfilePagePropsType
    addPostToState: (postMessage: string) => void
}

export const Profile = (props: postsDataProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostToState={props.addPostToState}/>
        </div>
    )
}