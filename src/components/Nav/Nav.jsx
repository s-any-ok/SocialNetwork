import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

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
        <br />
        <br />
        <Friends friends={props.sidebar.friends} />
      </div>
    </div>
  );
};

export default Nav;
