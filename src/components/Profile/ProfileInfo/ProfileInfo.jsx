import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div>Hi, I am Oleksandr Levak</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
