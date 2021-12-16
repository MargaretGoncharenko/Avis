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
import {StoreType} from "./redux/state";

type AppProps = {
    store: StoreType
}
const App = (props: AppProps) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path="/profile" render={() => <Profile
                    //достаем из state
                    profilePage={state.profilePage}
                    newPostText={state.profilePage.newPostText}
                    //достаем из пропсов store (нужен bind)
                    addPostToState={props.store.addPostToState.bind(props.store)}
                    updatePostText={props.store.updatePostText.bind(props.store)}
                />}/>
                <Route path="/messages" render={() => <Dialogs
                    //достаем из state
                    dialogs={state.dialogsPage}
                    newMessageText={state.dialogsPage.newMessageText}
                    //достаем из пропсов store (нужен bind)
                    addMessageToState={props.store.addMessageToState.bind(props.store)}
                    updateMessageText={props.store.updateMessageText.bind(props.store)}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
