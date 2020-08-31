import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg" />
      </div>
      <div>
        <div>Hi, I am Oleksandr Levak</div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
