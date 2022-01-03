import React, {useEffect} from "react";
import "./Users.css"
import axios from "axios";
import {InitialUsersStateType, UserPropsType} from "../../redux/users-reducer";
import userPhoto from "../../assets/user.png";

type PropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
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
// }