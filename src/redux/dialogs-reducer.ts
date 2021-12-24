import {v1} from "uuid";
import {AllActionTypes, DialogsActionTypes, DialogsPagePropsType, MessagePropsType} from "./store";

const initialState = {
    dialogs: [
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Valery"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Ira"},
        {id: v1(), name: "Katya"},
        {id: v1(), name: "Maxim"},
    ],
    messages: [
        {id: v1(), message: "hello"},
        {id: v1(), message: "hey"},
        {id: v1(), message: "how are you?"},
        {id: v1(), message: "yooooo!!!"},
        {id: v1(), message: "fine"},
        {id: v1(), message: "thanks"},
    ],
    newMessageText: ""
}
export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: AllActionTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE-TO-STATE":
            const newMessage: MessagePropsType = {
                id: v1(),
                message: action.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = "";
            return state

        case "UPDATE-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            return state

        default:
            return state
    }
}

export const AddMessageAC = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE-TO-STATE",
        newMessageText: newMessageText
    } as const
}
export const UpdateMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-MESSAGE-TEXT",
        newText: newText
    } as const
}

