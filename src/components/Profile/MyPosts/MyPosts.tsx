import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "../../../redux/store";


type MyPostsProps = {
    addPost: () => void
    updatePostText: (value: string) => void
    newPostText: string
    posts: ProfilePagePropsType

}
export const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.posts.map(p =>
        <div>
            <Post message={p.postText} likesCount={p.likesCount}/>
        </div>)
    const addPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)

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