import {addMessageToState, addPostToState, RootStatePropsType, updateMessageText, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderTree = (state: RootStatePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPostToState={addPostToState}
                     updatePostText={updatePostText}
                     addMessageToState={addMessageToState}
                     updateMessageText={updateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}