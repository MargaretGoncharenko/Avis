import React from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogsPropsType, MessagesPropsType} from "../../index";

type DialogsProps = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
}
export const Dialogs = (props: DialogsProps) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)
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