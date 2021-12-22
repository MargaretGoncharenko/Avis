import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {RootStoreType, store} from "./redux/redux-store";
import {Store} from "redux";

export const renderTree = (store: Store<RootStoreType, any>) => {
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

store.subscribe(()=>{
    renderTree(store)
});
renderTree(store);

reportWebVitals();

