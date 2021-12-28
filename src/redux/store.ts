import {v1} from "uuid";
import {AddPostAC, profileReducer, UpdatePostTextAC} from "./profile-reducer";
import {AddMessageAC, dialogsReducer, UpdateMessageTextAC} from "./dialogs-reducer";

 type MessagePropsType = {
    id: string
    message: string
}
 type DialogPropsType = {
    id: string
    name: string
}
 type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
 type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
 type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}
export type DialogsActionTypes =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateMessageTextAC>

export  type  ProfileActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdatePostTextAC>

export type AllActionTypes = DialogsActionTypes | ProfileActionTypes

export type StoreType = {
    _state: RootStatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: AllActionTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), postText: "Hi! How are you?", likesCount: 21},
                {id: v1(), postText: "Hello everyone!", likesCount: 45},
                {id: v1(), postText: "It's my first post.", likesCount: 28},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("state was changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
}
