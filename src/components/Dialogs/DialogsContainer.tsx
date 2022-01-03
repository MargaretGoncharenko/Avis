import React from "react";
import {AddMessageAC, InitialDialogsStateType, UpdateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialDialogsStateType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    onMessageChange: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(AddMessageAC(newMessageText))
        },
        onMessageChange: (value: string) => {
            dispatch(UpdateMessageTextAC(value))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
