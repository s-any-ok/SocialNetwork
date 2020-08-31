import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.menuBtns}>
        <a href="/profile">Profile</a>
        <a href="/dialogs">Messages</a>
        <a>News</a>
        <a>Music</a>
        <hr />
        <a>Settings</a>
      </div>
    </div>
  );
};

export default Nav;
