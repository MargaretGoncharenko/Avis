import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC, ToggleIsFetchingAC,
    UnfollowAC,
    UserPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/preloader/Preloader";

class UsersContainerClass extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChangedHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunc totalUsersCount={this.props.totalUsersCount}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       setUsers={this.props.setUsers}
                       follow={this.props.follow}
                       pageSize={this.props.pageSize}
                       setCurrentPage={this.props.setCurrentPage}
                       unfollow={this.props.unfollow}
                       onPageChangedHandler={this.onPageChangedHandler}
                       isFetching={this.props.isFetching}

            />
        </>

    }
}

export default UsersContainerClass;

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
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
        ToggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass)