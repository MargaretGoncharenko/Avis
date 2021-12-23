import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStoreType} from './redux/redux-store';
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppProps = {
    store: Store<RootStoreType, any>
}
const App = (props: AppProps) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path="/profile" render={() => <Profile
                    profilePage={state.profilePage}
                    newPostText={state.profilePage.newPostText}
                    store={props.store}
                />}/>
                <Route path="/messages" render={() => <DialogsContainer
                    dialogs={state.dialogsPage}
                    newMessageText={state.dialogsPage.newMessageText}
                    store={props.store}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;


// Type '{ dispatch: Dispatch<any>; dialogs: DialogsPagePropsType; newMessageText: string; }'
// is missing the following properties from type 'DialogsProps': addMessage, updateMessageText