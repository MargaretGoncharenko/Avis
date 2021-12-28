import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsContainerPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    const addMessage = () => {
        const messageText = props.dialogsPage.newMessageText;
        if (messageText) {
            props.addMessage(messageText)
        }
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.onMessageChange(text)
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
            <div className={d.sendBlock}>
                <textarea className={d.textarea}
                          value={props.dialogsPage.newMessageText}
                          onChange={onMessageChange}
                />
                <div>
                    <button className={d.sendBtn}
                            onClick={addMessage}>
                        send
                    </button>
                </div>
            </div>
        </div>
    )
}