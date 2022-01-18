import React from "react";
import "./Users.css"
import userPhoto from "../../assets/user.png";
import {UserPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersFuncPropsType = {
    totalUsersCount: number
    setTotalUsersCount: (totalUsersCount: number) => void
    users: Array<UserPropsType>
    currentPage: number
    setUsers: (users: Array<UserPropsType>) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    onPageChangedHandler: (pageNumber: number) => void
    isFetching: boolean
}
export const UsersFunc = (props: UsersFuncPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.totalUsersCount)
    return (
        <div>
            {pages.map(p => {
                return (
                    <span className={props.currentPage === p ? "selectedPage" : ""}
                          onClick={() => {
                              props.onPageChangedHandler(p)
                          }}
                    >{p}</span>
                )
            })
            }
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "af7f2879-c3e2-4926-80ff-23abea81785c"
                                                }
                                            })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "af7f2879-c3e2-4926-80ff-23abea81785c"
                                                }
                                            })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name ? u.name : 'u.fullName'}</div>
                            <div>{u.status ? u.status : null}</div>
                        </span>
                        <span>
                            <div>{u.location && u.location.country ? u.location.country : 'u.location.country'}</div>
                            <div>{u.location && u.location.city ? u.location.city : 'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}