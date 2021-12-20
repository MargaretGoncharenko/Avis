import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AddPostAC, AllActionTypes, ProfilePagePropsType, UpdatePostTextAC} from "../../../redux/state";

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
        props.dispatch(AddPostAC(props.newPostText))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdatePostTextAC(e.currentTarget.value)
        )
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