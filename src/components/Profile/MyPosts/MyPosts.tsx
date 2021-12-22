import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfileActionTypes, ProfilePagePropsType} from "../../../redux/store";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";

type MyPostsProps = {
    posts: ProfilePagePropsType
    newPostText: string
    dispatch: (action: ProfileActionTypes) => void
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