import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStatePropsType, state, subscribe} from "./redux/state";
import {addMessageToState, addPostToState, updateMessageText, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderTree = () => {
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
renderTree();
subscribe(renderTree);

reportWebVitals();

