import {v1} from "uuid";
import {AllActionTypes} from "./AllActionTypes";


type MessagePropsType = {
    id: string
    message: string
}
type DialogPropsType = {
    id: string
    name: string
}
type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}
export type InitialDialogsStateType = DialogsPagePropsType

const initialState: InitialDialogsStateType = {
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

export const dialogsReducer = (state: InitialDialogsStateType = initialState, action: AllActionTypes): InitialDialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE-TO-STATE":
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages,
                    {
                        id: v1(),
                        message: action.newMessageText,
                    }
                ]
            }
        case "UPDATE-MESSAGE-TEXT":
            return {...state, newMessageText: action.newText}
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

