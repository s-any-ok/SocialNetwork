import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.menuBtns}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
        <hr />
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
