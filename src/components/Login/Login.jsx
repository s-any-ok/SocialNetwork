import React from "react";
import s from "./Login.module.css";
import { reduxForm } from "redux-form";
import { createForm, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  let onSubmit = ({ email, password, rememberMe, captcha }) => {
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} captchUrl={props.captchUrl} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createForm("Email", "email", Input, [required])}
      {createForm("Password", "password", Input, [required], {
        type: "password",
      })}
      {createForm(
        null,
        "rememberMe",
        Input,
        [],
        { type: "checkbox" },
        "rememberMe"
      )}
      {captchUrl && <img alt="captch" src={captchUrl} />}
      {captchUrl && createForm("Input captch", "captcha", Input, [required])}
      {error && <div className={s.commonError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchUrl: state.auth.captchUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
