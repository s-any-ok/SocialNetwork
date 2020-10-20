import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateUserStatus, isOwner }) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
