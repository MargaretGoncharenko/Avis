import React from "react";
import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: string
}
export const DialogItem = (props: DialogItemProps) => {
    let path = "/messages/" + props.id;
    return (
        <div className={d.dialogs + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}