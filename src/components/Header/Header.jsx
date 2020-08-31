import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <big>Li1n</big>
      </div>
    </div>
  );
};

export default Header;
