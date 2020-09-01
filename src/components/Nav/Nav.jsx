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
        <br />
        <br />
        <div>
          <div className={s.friendsHead}>
            <h2>Friends</h2>
          </div>
          <div className={s.friends}>
            <div className={s.friend}>
              <div>
                <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
              </div>
              <h6>Max</h6>
            </div>
            <div className={s.friend}>
              <div>
                <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
              </div>
              <h6>Max</h6>
            </div>
            <div className={s.friend}>
              <div>
                <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
              </div>
              <h6>Max</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
