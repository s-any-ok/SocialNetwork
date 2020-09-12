import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <big>Li1n</big>
        </div>

        {props.isAuth ? (
          <div className={s.login}>{props.login}</div>
        ) : (
          <NavLink to="/login">
            <div className={s.login}>Login</div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
