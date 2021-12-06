import React from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                <div>
                    <textarea className={mp.textarea}
                              placeholder="Post something!"/>
                </div>
                <div>
                    <button className={mp.addBtn}>Add post</button>
                </div>
            </div>
            <div className={mp.posts}>
                <div><Post message="Hi! How are you?" likesCount={21}/></div>
                <div><Post message="It's my first post." likesCount={28}/></div>
            </div>
        </div>
    )
}