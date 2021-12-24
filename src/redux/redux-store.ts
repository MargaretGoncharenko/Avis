import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export let store = createStore(reducers);


// export type RootStateType = ReturnType<typeof store.getState>
// export type RootStoreType = ReturnType<typeof reducers>
//Store<RootStoreType, any> Store - это редаксовский стор, RootStoreType -
// это типизация, которую мы ему даем вручную, any - пока что типизация для action