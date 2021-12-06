import React from "react";
import {NavLink} from "react-router-dom";
import d from "./Dialogs.module.css";

type DialogItemProps = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemProps) => {
    let path = "/messages/" + props.id;
    return (
        <div className={d.dialogs + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message: string
}
const Message = (props: MessageProps) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Andrey" id="1"/>
                <DialogItem name="Valery" id="2"/>
                <DialogItem name="Anna" id="3"/>
                <DialogItem name="Ira" id="4"/>
                <DialogItem name="Katya" id="5"/>
                <DialogItem name="Maxim" id="6"/>

            </div>
            <div className={d.messages}>
                <Message message="hello"/>
                <Message message="hey"/>
                <Message message="how are you?"/>

            </div>
        </div>
    )
}