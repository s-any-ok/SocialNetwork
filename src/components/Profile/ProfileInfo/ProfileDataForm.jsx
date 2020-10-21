import React from "react";
import { reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import {
  createForm,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  debugger;
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.aboutUser}>
        <div>
          <h3>Contacts</h3>
          {Object.keys(profile.contacts).map((key) => (
            <div key={key}>
              <b>{key}: </b> {createForm(key, "contacts." + key, Textarea, [])}
            </div>
          ))}
        </div>
        <div className={s.workStatus}>
          <h3>Work status</h3>
          <div>
            <b>Full name: </b>{" "}
            {createForm("Full name", "fullName", Textarea, [])}
          </div>
          <div>
            <b>About me: </b> {createForm("About me", "aboutMe", Textarea, [])}
          </div>
          <div>
            <b>My skills: </b>{" "}
            {createForm("My skills", "lookingForAJobDescription", Textarea, [])}
          </div>
          <div>
            <b>Job hunting: </b>{" "}
            {createForm("", "lookingForAJob", Input, [], { type: "checkbox" })}
          </div>
          {error && <div className={s.error}>{error}</div>}
          <div>
            <button>Save</button>
          </div>
        </div>
      </div>
    </form>
  );
};
const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
