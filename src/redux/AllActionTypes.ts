import {AddMessageAC, UpdateMessageTextAC} from "./dialogs-reducer";
import {AddPostAC, setStatus, setUserProfile, UpdatePostTextAC} from "./profile-reducer";
import {
    followSuccess, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress, unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type DialogsActionTypes =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateMessageTextAC>

export  type  ProfileActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdatePostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


export type UsersActionTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


export type AuthUserActionTypes = ReturnType<typeof setAuthUserData>

export type AllActionTypes = DialogsActionTypes | ProfileActionTypes | UsersActionTypes | AuthUserActionTypes