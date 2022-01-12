import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileProps, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
type  PathParamsType = {
    userId: string | undefined
}

export class ProfileContainerClass extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        console.log('userId: ', this.props.match)
        if (!userId) {
            userId = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
        console.log(userId)
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

type MapStateToPropsType = {
    profile: ProfileProps
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileProps) => void
}
const WithURLDataContainerComponent = withRouter(ProfileContainerClass)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)