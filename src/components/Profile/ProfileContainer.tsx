import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileProps, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";

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
        this.props.getStatus(userId)
        console.log(userId)
    }

    render() {
        return (
            <>
                <Profile getUserProfile={this.props.getUserProfile}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileProps
    status: string
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainerClass)