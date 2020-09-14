import React from "react";
import s from "./ProfileInfo.module.css";
import userDefaultPhoto from "./../../../assets/img/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        {/* <img
          alt="wallpaper"
          className={s.wallImg}
          src="https://d2dpa77enk4uif.cloudfront.net/app/uploads/20180506191205/silicon-valley-s5-intro-feature1.jpg"
        /> */}
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.photoAndName}>
          <img
            alt="profile"
            className={s.photo}
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userDefaultPhoto
            }
          />
          <div className={s.fullName}>{props.profile.fullName}</div>
          <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
        <div className={s.aboutUser}>
          <div>
            <h4>Contacts</h4>
            <div>
              <a href={props.profile.contacts.facebook}>Facebook</a>
            </div>
            <div>
              <a href={props.profile.contacts.vk}>Vk</a>
            </div>
            <div>
              <a href={props.profile.contacts.twitter}>Twitter</a>
            </div>
            <div>
              <a href={props.profile.contacts.instagram}>Instagram</a>
            </div>
            <div>
              <a href={props.profile.contacts.github}>Github</a>
            </div>
          </div>
          <div>
            <h4>Work status</h4>
            <div>About me: {props.profile.aboutMe}</div>
            <div>
              Job hunting: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>About job: {props.profile.lookingForAJobDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
