import {v1} from "uuid";
import {renderTree} from "../render";

export type MessagePropsType = {
    id: string
    message: string
}
export type DialogPropsType = {
    id: string
    name: string
}
export type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

export const state: RootStatePropsType = {
    profilePage: {
        posts: [
            {id: v1(), postText: "Hi! How are you?", likesCount: 21},
            {id: v1(), postText: "Hello everyone!", likesCount: 45},
            {id: v1(), postText: "It's my first post.", likesCount: 28},
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Andrey"},
            {id: v1(), name: "Valery"},
            {id: v1(), name: "Anna"},
            {id: v1(), name: "Ira"},
            {id: v1(), name: "Katya"},
            {id: v1(), name: "Maxim"},
        ],
        messages: [
            {id: v1(), message: "hello"},
            {id: v1(), message: "hey"},
            {id: v1(), message: "how are you?"},
            {id: v1(), message: "yooooo!!!"},
            {id: v1(), message: "fine"},
            {id: v1(), message: "thanks"},
        ],
        newMessageText: ""
    }
}

export const addPostToState = () => {
    const newPost: PostPropsType = {
        id: v1(),
        postText: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = "";
    renderTree(state);
}
export const updatePostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}

export const addMessageToState = () => {
    const newMessage: MessagePropsType = {
        id: v1(),
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    renderTree(state);
}
export const updateMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    renderTree(state);
}