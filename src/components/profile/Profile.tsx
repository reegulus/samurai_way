import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string)=> void
}
export function Profile(props: ProfilePagePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}/>
        </div>
    )
}