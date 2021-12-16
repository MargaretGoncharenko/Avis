import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AllActionTypes, StoreType} from "./redux/state";

type AppProps = {
    store: StoreType
    dispatch: (action: AllActionTypes) => void
}
const App = (props: AppProps) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path="/profile" render={() => <Profile
                    dispatch={props.store.dispatch.bind(props.store)}
                    profilePage={state.profilePage}
                    newPostText={state.profilePage.newPostText}
                />}/>
                <Route path="/messages" render={() => <Dialogs
                    dispatch={props.store.dispatch.bind(props.store)}
                    dialogs={state.dialogsPage}
                    newMessageText={state.dialogsPage.newMessageText}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
