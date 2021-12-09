import React from "react";
import d from "./Dialogs.module.css";
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type dialogsDataProps = {
    id: string
    name: string
}
type messagesDataProps = {
    id: string
    message: string
}
export const Dialogs = () => {
    const dialogsData = [
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Valery"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Ira"},
        {id: v1(), name: "Katya"},
        {id: v1(), name: "Maxim"},
    ]
    const messagesData = [
        {id: v1(), message: "hello"},
        {id: v1(), message: "hey"},
        {id: v1(), message: "how are you?"},
        {id: v1(), message: "yooooo!!!"},
        {id: v1(), message: "fine"},
        {id: v1(), message: "thanks"},
    ]
    const dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}