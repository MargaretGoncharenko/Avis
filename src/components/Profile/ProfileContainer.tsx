import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileProps} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";

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
        this.props.getUserProfile(userId)
        console.log(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <>
                <Profile getUserProfile={this.props.getUserProfile}
                         profile={this.props.profile}
                />
            </>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileProps
    isAuth: boolean
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
const WithURLDataContainerComponent = withRouter(ProfileContainerClass)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)