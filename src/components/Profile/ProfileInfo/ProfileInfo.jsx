import React from "react";
import s from "./ProfileInfo.module.css";
import userDefaultPhoto from "./../../../assets/img/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner }) => {
  const changePhoto = (e) => {
    if (e.target.files.lenght) {
    }
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.photoAndName}>
          <img
            alt="profile"
            className={s.photo}
            src={
              profile.photos.large != null
                ? profile.photos.large
                : userDefaultPhoto
            }
          />
          {isOwner && (
            <div className={s.cngPhotoBtn}>
              <input type={"file"} onChange={changePhoto} />
            </div>
          )}
          <div className={s.fullName}>{profile.fullName}</div>
          <ProfileStatusWithHooks
            status={status}
            updateUserStatus={updateUserStatus}
          />
        </div>
        <div className={s.aboutUser}>
          <div>
            <h4>Contacts</h4>
            <div>
              <a href={profile.contacts.facebook}>Facebook</a>
            </div>
            <div>
              <a href={profile.contacts.vk}>Vk</a>
            </div>
            <div>
              <a href={profile.contacts.twitter}>Twitter</a>
            </div>
            <div>
              <a href={profile.contacts.instagram}>Instagram</a>
            </div>
            <div>
              <a href={profile.contacts.github}>Github</a>
            </div>
          </div>
          <div>
            <h4>Work status</h4>
            <div>About me: {profile.aboutMe}</div>
            <div>Job hunting: {profile.lookingForAJob ? "Yes" : "No"}</div>
            <div>About job: {profile.lookingForAJobDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
