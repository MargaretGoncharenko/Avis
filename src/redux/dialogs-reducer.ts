import {v1} from "uuid";
import {DialogsActionTypes, DialogsPagePropsType, MessagePropsType} from "./state";

export const dialogsReducer = (state: DialogsPagePropsType, action: DialogsActionTypes) => {
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

