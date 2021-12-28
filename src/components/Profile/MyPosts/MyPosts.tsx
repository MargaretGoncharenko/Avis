import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfileContainerPropsType} from "./MyPostsContainer";

export const MyPosts = (props: ProfileContainerPropsType) => {
    const postsElements = props.profilePage.posts.map(p =>
        <div>
            <Post message={p.postText} likesCount={p.likesCount}/>
        </div>)
    const addPost = () => {
        const postText = props.profilePage.newPostText;
        if (postText) {
            props.addPost(postText);
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.onPostChange(text)
        console.log(text)
    }

    return (
        <div>
            <div>
                <div>
                    <textarea className={mp.textarea}
                              placeholder="Post something!"
                              value={props.profilePage.newPostText}
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