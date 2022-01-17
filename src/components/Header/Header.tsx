import React from "react";
import {NavLink} from "react-router-dom";
import h from "./Header.module.css";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={h.header}>
            <img
                src="https://us.123rf.com/450wm/marsono/marsono1806/marsono180600239/102493063-bird-logo-template-vector-illustration.jpg?ver=6"/>
            <div className={h.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}