import {AddMessageAC, UpdateMessageTextAC} from "./dialogs-reducer";
import {AddPostAC, UpdatePostTextAC} from "./profile-reducer";
import {FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, UnfollowAC} from "./users-reducer";

export type DialogsActionTypes =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateMessageTextAC>

export  type  ProfileActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdatePostTextAC>

export type UsersActionTypes =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>


export type AllActionTypes = DialogsActionTypes | ProfileActionTypes | UsersActionTypes