import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AllActionTypes, ProfilePagePropsType} from "../../../redux/state";

type MyPostsProps = {
    posts: ProfilePagePropsType
    newPostText: string
    dispatch: (action: AllActionTypes) => void
}
export const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.posts.map(p =>
        <div>
            <Post message={p.postText} likesCount={p.likesCount}/>
        </div>)
    const addPost = () => {
        props.dispatch({type: "ADD-POST-TO-STATE", newPostText: props.newPostText})
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-POST-TEXT", newText: e.currentTarget.value})
    }
    return (
        <div>
            <div>
                <div>
                    <textarea className={mp.textarea}
                              placeholder="Post something!"
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button className={mp.addBtn}
                            onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={mp.posts}>
                {postsElements}
            </div>
        </div>
    )
}