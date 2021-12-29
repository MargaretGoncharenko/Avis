import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, InitialUsersStateType, SetUsersAC, UnfollowAC, UserPropsType} from "../../redux/users-reducer";

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
type MapDispatchToPropsType = {
    follow: (userId: string) =>void
    unfollow: (userId: string) =>void
    setUsers: (users: Array<UserPropsType>) =>void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: Array<UserPropsType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)