import React from "react";
import d from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../redux/state";

type DialogsProps = {
    dialogs: DialogsPagePropsType
    addMessageToState: (messageText: string) => void
}
export const Dialogs = (props: DialogsProps) => {
    const dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.dialogs.messages.map(m => <Message message={m.message}/>)
    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        if (newMessageElement.current) {
            props.addMessageToState(newMessageElement.current.value);
            newMessageElement.current.value = "";
        }
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
                          ref={newMessageElement}/>
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