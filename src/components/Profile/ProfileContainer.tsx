import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileProps} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    // isAuth: boolean
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    //isAuth: state.auth.isAuth
})

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
// type AuthRedirectComponentPropsType = ProfileContainerPropsType
// const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
//     if (!props.isAuth) return <Redirect to={"/login"}/>
//     return<ProfileContainerClass profile={props.profile}
//                                isAuth={props.isAuth}
//                                getUserProfile={props.getUserProfile}
//                                history={props.history}
//                                location={props.location}
//                                match={props.match}/>
// }
const WithURLDataContainerComponent = withRouter(ProfileContainerClass)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent))