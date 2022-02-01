import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerClassPropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    getAuthUserData: () => void
    isAuth: boolean
}

class HeaderContainerClass extends React.Component<HeaderContainerClassPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />;
    }
}

type MapStateToPropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainerClass)