import React from "react";
import "./Users.css"
import userPhoto from "../../assets/user.png";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default UsersC;