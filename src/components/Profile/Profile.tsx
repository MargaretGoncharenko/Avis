import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { PostsPropsType } from "../../index";

export type postsDataProps = {
    posts: Array<PostsPropsType>
}

export const Profile = (props:postsDataProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}