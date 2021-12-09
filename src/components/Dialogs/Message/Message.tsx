import React from "react";
import d from "../Dialogs.module.css";

type MessageProps = {
    message: string
}
export const Message = (props: MessageProps) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}