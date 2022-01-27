import React from "react";
import "./Users.css"
import userPhoto from "../../assets/user.png";
import {UserPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersFuncPropsType = {
    totalUsersCount: number
    users: Array<UserPropsType>
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    onPageChangedHandler: (pageNumber: number) => void
    followingInProgress: Array<number>
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
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>
                                    unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>
                                    follow</button>}
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