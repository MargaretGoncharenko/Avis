import React from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../redux/state";

type DialogsProps = {
    dialogs: DialogsPagePropsType
}
export const Dialogs = (props: DialogsProps) => {
    const dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.dialogs.messages.map(m => <Message message={m.message}/>)
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