import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export let store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;

