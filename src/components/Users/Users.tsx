import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import "./Users.css"
import {v1} from "uuid";

export const Users = (props: UsersContainerPropsType) => {
    // if(props.usersPage.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: v1(),
    //             photo: "https://cdn.britannica.com/15/186115-050-22AB26CB/Ava-Gardner-Pandora-Flying-Dutchman-Albert-Lewin.jpg",
    //             followed: true,
    //             fullName: "Helen Novikova",
    //             status: "Hello",
    //             location: {city: "Minsk", country: "Belarus"}
    //         },
    //         {
    //             id: v1(),
    //             photo: "https://www.gannett-cdn.com/presto/2021/02/12/NATR/7e6a5046-007e-480c-b707-e1f59dc7412c-Ava_Hawthorne_photo.jpg",
    //             followed: false,
    //             fullName: "Svetlana Zakharava",
    //             status: "I'm a boss",
    //             location: {city: "Voronezh", country: "Russia"}
    //         },
    //         {
    //             id: v1(),
    //             photo: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/02/ava1-e1582642292609.png",
    //             followed: true,
    //             fullName: "Amalia Melejin",
    //             status: "I like pets",
    //             location: {city: "Lviv", country: "Ukraine"}
    //         },
    //     ])
    // } пока не работает
    return <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={"avatar"} src={u.photo}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
}