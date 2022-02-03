import React from "react";
import {AddMessageAC, InitialDialogsStateType, UpdateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    dialogsPage: InitialDialogsStateType
    //  isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        //  isAuth: state.auth.isAuth
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
// type AuthRedirectComponentPropsType = MapStateToPropsType & MapDispatchToPropsType
// const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
//     if (!props.isAuth) return <Redirect to={"/login"}/>
//     return <Dialogs dialogsPage={props.dialogsPage}
//                     addMessage={props.addMessage}
//                     onMessageChange={props.onMessageChange}
//                     isAuth={props.isAuth}/>
// }
export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
