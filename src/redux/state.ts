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
    addPostToState: () => void
    updatePostText: (newText: string) => void
    addMessageToState: () => void
    updateMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStatePropsType
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
    addPostToState() {
        const newPost: PostPropsType = {
            id: v1(),
            postText: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        debugger;
        this._callSubscriber();
    },
    addMessageToState() {
        const newMessage: MessagePropsType = {
            id: v1(),
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._callSubscriber();
    },
    updateMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    _callSubscriber() {
        console.log("state was changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    }
}




