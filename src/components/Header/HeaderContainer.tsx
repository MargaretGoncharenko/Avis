import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerClassPropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    setAuthUserData: (data: DataType) => void,
    isAuth: boolean
}

class HeaderContainerClass extends React.Component<HeaderContainerClassPropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        const {id, email, login} = response.data.data;
                        this.props.setAuthUserData({id, email, login})
                    }
                }
            )
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerClass)