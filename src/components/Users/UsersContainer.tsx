import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, unfollow,
    UserPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/preloader/Preloader";

type UsersContainerClassPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainerClass extends React.Component<UsersContainerClassPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChangedHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
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
export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainerClass)