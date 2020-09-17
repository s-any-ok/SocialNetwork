import React from "react";
import s from "./FormsControls.module.css";

const FormConstructor = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControler + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <div className={s.errText}>{meta.error}</div>}
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
