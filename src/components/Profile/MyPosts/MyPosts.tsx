import React from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "../../../redux/state";

type MyPostsProps = {
    posts: ProfilePagePropsType
}
export const MyPosts = (props: MyPostsProps) => {
    const postsElements = props.posts.posts.map(p => <div><Post message={p.postText} likesCount={p.likesCount}/></div>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        alert(newPostElement.current?.value);
    }
    return (
        <div>
            <div>
                <div>
                    <textarea className={mp.textarea}
                              ref={newPostElement}
                              placeholder="Post something!"/>
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