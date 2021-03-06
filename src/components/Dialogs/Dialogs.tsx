import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialDialogsStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialDialogsStateType
    addMessage: (newMessageText: string) => void
    onMessageChange: (value: string) => void
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
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