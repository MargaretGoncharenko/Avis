import React from "react";
import mp from "./MyPosts.module.css";
import {Post} from "./Post/Post";

import {postsDataProps} from "../Profile";

type MyPostsProps = {
    postsData: Array<postsDataProps>
}
export const MyPosts = (props: MyPostsProps) => {

    const postsElements = props.postsData.map(p => <div><Post message={p.postText} likesCount={p.likesCount}/></div>)
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
                {postsElements}
            </div>
        </div>
    )
}