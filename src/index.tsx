import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/state";


export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);
renderTree();

reportWebVitals();

