import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../validators/validators";

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
        <Field
          placeholder="Login"
          name="login"
          component={Input}
          type="text"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component={Input}
          type="text"
          validate={[required]}
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
