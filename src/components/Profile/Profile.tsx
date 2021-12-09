import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";

export type postsDataProps = {
    id: string
    postText: string
    likesCount: number
}

export const Profile = () => {
    const postsData = [
        {id: v1(), postText: "Hi! How are you?", likesCount: 21},
        {id: v1(), postText: "Hello everyone!", likesCount: 45},
        {id: v1(), postText: "It's my first post.", likesCount: 28},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}