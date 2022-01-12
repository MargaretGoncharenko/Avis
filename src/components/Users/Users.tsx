//This file isn't used yet. Instead, it uses UsersContainer.tsx
import React, {useEffect} from "react";
import "./Users.css"
import axios from "axios";
import {InitialUsersStateType, UserPropsType} from "../../redux/users-reducer";
import userPhoto from "../../assets/user.png";

type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserPropsType>) => void
    usersPage: InitialUsersStateType
}
export const Users = (props: PropsType) => {
    useEffect(() => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }, [])

    console.log(props.usersPage.users)
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto}/>

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
}
