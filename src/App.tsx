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
import {RootStatePropsType} from "./redux/state";

type AppProps = {
    state: RootStatePropsType
    addPostToState: (postMessage: string) => void
    addMessageToState: (messageText: string) => void
}
const App = (props: AppProps) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path="/profile" render={() => <Profile
                    posts={props.state.profilePage}
                    addPostToState={props.addPostToState}/>}/>
                <Route path="/messages" render={() => <Dialogs
                    dialogs={props.state.dialogsPage}
                    addMessageToState={props.addMessageToState}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
