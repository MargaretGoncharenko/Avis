import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

export type PostsPropsType = {
    id: string
    postText: string
    likesCount: number
}
const posts = [
    {id: v1(), postText: "Hi! How are you?", likesCount: 21},
    {id: v1(), postText: "Hello everyone!", likesCount: 45},
    {id: v1(), postText: "It's my first post.", likesCount: 28},
]
export type DialogsPropsType = {
    id: string
    name: string
}
const dialogs = [
    {id: v1(), name: "Andrey"},
    {id: v1(), name: "Valery"},
    {id: v1(), name: "Anna"},
    {id: v1(), name: "Ira"},
    {id: v1(), name: "Katya"},
    {id: v1(), name: "Maxim"},
]
export type MessagesPropsType = {
    id: string
    message: string
}
const messages = [
    {id: v1(), message: "hello"},
    {id: v1(), message: "hey"},
    {id: v1(), message: "how are you?"},
    {id: v1(), message: "yooooo!!!"},
    {id: v1(), message: "fine"},
    {id: v1(), message: "thanks"},
]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts}
             dialogs={dialogs}
             messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
