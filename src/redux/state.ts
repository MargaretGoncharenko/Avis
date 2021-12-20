import {v1} from "uuid";

export type MessagePropsType = {
    id: string
    message: string
}
export type DialogPropsType = {
    id: string
    name: string
}
export type PostPropsType = {
    id: string
    postText: string
    likesCount: number
}
export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}


export type StoreType = {
    _state: RootStatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: AllActionTypes) => void
}

export type AllActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdatePostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateMessageTextAC>

export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST-TO-STATE",
        newPostText: newPostText
    } as const
}
export const UpdatePostTextAC = (newText: string) => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: newText
    } as const
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
export const store: StoreType = {
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
        if (action.type === "ADD-POST-TO-STATE") {
            const newPost: PostPropsType = {
                id: v1(),
                postText: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === "ADD-MESSAGE-TO-STATE") {
            const newMessage: MessagePropsType = {
                id: v1(),
                message: action.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber();
        } else if (action.type === "UPDATE-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }
}




