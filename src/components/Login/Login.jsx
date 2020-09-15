import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const Login = (props) => {
  let onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component="input" type="text" />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          placeholder="login"
          name="rememberMe"
          component="input"
        />{" "}
        remember me
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default Login;
