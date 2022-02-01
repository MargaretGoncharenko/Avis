import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileProps} from "../../redux/profile-reducer";

type ProfilePropsType = {
    getUserProfile: (userId: number) => void
    profile: ProfileProps
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} getUserProfile={props.getUserProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}
