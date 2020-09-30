import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

const FormConstructor = ({ input, meta: { error, touched }, children }) => {
  const hasError = error && touched;
  return (
    <div className={s.formControler + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <div className={s.errText}>{error}</div>}
    </div>
  );
};
export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormConstructor {...props}>
      <textarea {...input} {...restProps} />
    </FormConstructor>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormConstructor {...props}>
      <input {...input} {...restProps} />
    </FormConstructor>
  );
};

export const createForm = (
  placeholder,
  name,
  component,
  validators,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
