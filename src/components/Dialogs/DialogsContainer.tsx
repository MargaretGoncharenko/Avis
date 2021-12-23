import React from "react";
import {DialogsPagePropsType} from "../../redux/store";
import {AddMessageAC, UpdateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";
import {RootStoreType} from "../../redux/redux-store";

type DialogsProps = {
    dialogs: DialogsPagePropsType
    newMessageText: string
    store: Store<RootStoreType, any>
}
export const DialogsContainer = (props: DialogsProps) => {
    const addMessage = () => {
        props.store.dispatch(AddMessageAC(props.newMessageText))
    }
    const onMessageChange = (value: string) => {
        props.store.dispatch(UpdateMessageTextAC(value))
    }
    return (
        <Dialogs
            addMessage={addMessage}
            updateMessageText={onMessageChange}
            dialogs={props.dialogs}
            newMessageText={props.newMessageText}
        />
    )
}