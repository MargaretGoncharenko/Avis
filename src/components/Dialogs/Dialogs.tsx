import React from "react";
import {NavLink} from "react-router-dom";
import d from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/1">Andrey</NavLink>
                </div>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/2">Valery</NavLink>
                </div>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/3">Anna</NavLink>
                </div>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/4">Ira</NavLink>
                </div>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/5">Katya</NavLink>
                </div>
                <div className={d.dialogs + ' ' + d.active}>
                    <NavLink to="/messages/6">Maxim</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>hello</div>
                <div className={d.message}>hey</div>
                <div className={d.message}>how are you?</div>
            </div>
        </div>
    )
}