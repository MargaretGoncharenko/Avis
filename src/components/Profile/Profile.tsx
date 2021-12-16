import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionTypes, ProfilePagePropsType} from "../../redux/state";

export type postsDataProps = {
    profilePage: ProfilePagePropsType
    newPostText: string
    dispatch: (action: AllActionTypes) => void
}

export const Profile = (props: postsDataProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}