import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    UserPropsType
} from "../../redux/users-reducer";
import UsersC from "./UsersC";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)