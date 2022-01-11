import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileProps, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerClassPropsType = {
    setUserProfile: (profile: ProfileProps) => void
    profile: ProfileProps
}

export class ProfileContainerClass extends React.Component<ProfileContainerClassPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <>
                <Profile setUserProfile={this.props.setUserProfile}
                         profile={this.props.profile}
                />
            </>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileProps
}
export const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerClass)