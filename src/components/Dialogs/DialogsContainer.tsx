import React from "react";
import {AddMessageAC, UpdateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;
                const addMessage = () => {
                    store.dispatch(AddMessageAC(state.newMessageText))
                }
                const onMessageChange = (value: string) => {
                    store.dispatch(UpdateMessageTextAC(value))
                }
                return (
                    <Dialogs
                        addMessage={addMessage}
                        updateMessageText={onMessageChange}
                        dialogs={state.dialogs}
                        messages={state.messages}
                        newMessageText={state.newMessageText}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}