import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessageAC, AllActionTypes, DialogsPagePropsType, UpdateMessageTextAC} from "../../redux/state";

type DialogsProps = {
    dialogs: DialogsPagePropsType
    newMessageText: string
    dispatch: (action: AllActionTypes) => void
}
export const Dialogs = (props: DialogsProps) => {
    const dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.dialogs.messages.map(m => <Message message={m.message}/>)
    const addMessage = () => {
        props.dispatch(AddMessageAC(props.newMessageText))

    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateMessageTextAC(e.currentTarget.value))
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
                          value={props.newMessageText}
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