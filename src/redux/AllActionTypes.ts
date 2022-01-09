import {AddMessageAC, UpdateMessageTextAC} from "./dialogs-reducer";
import {AddPostAC, UpdatePostTextAC} from "./profile-reducer";
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, unfollow
} from "./users-reducer";

export type DialogsActionTypes =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateMessageTextAC>

export  type  ProfileActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdatePostTextAC>

export type UsersActionTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


export type AllActionTypes = DialogsActionTypes | ProfileActionTypes | UsersActionTypes