import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import userDefaultPhoto from "./../../../assets/img/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const changePhoto = ({ target }) => {
    if (target.files.length) {
      savePhoto(target.files[0]);
    }
  };

  let onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
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
            <div>
              <label className={s.photoLable} for="fileElem">
                Update photo
              </label>
              <input
                id="fileElem"
                className={s.customInputFile}
                type={"file"}
                onChange={changePhoto}
              />
            </div>
          )}
          <div className={s.fullName}>{profile.fullName}</div>
          <ProfileStatusWithHooks
            propStatus={status}
            updateUserStatus={updateUserStatus}
          />
        </div>

        {editMode ? (
          <ProfileDataForm
            onSubmit={onSubmit}
            profile={profile}
            initialValues={profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => setEditMode(true)}
            isOwner={isOwner}
            profile={profile}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={s.aboutUser}>
      <div>
        <h3>Contacts</h3>
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
      <div className={s.workStatus}>
        <h3>Work status</h3>
        <div>
          <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
          <b>Job hunting: </b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
          <b>My skills: </b>
          {profile.lookingForAJobDescription}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}: </b>
      <a href={contactValue}>{contactValue}</a>
    </div>
  );
};
export default ProfileInfo;
