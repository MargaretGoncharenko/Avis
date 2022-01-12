import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileProps} from "../../redux/profile-reducer";

type ProfilePropsType = {
    setUserProfile: (profile: ProfileProps) => void
    profile: ProfileProps
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} setUserProfile={props.setUserProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}


// const [test,setTest] = useState<null| any>(null)
//
// useEffect(()=>{
//     fetchDataProfile()
//     const arrProfile = Object.keys(profile)
//     if(arrProfile.length){
//         setTest(profile)
//     }else{
//         setTest({
//             gi
//         })
//     }
//
// },[profile])
//
// return (
//     <div>
//         {test?.github || "test"}
//         <ProfileInfo/>
//         <MyPostsContainer/>
//     </div>