import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className={s.nav}>
      <div className={s.menuBtns}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
