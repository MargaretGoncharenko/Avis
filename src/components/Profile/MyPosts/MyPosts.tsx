import React from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                    <textarea className={mp.textarea}
                              placeholder="Post something!"/>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="Hi! How are you?" likesCount={21}/>
                <Post message="It's my first post." likesCount={28}/>

            </div>
        </div>
    )
}