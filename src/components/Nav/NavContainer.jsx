import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
