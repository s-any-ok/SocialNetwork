import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = ({ propStatus, updateUserStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(propStatus);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div onClick={activateEditMode} className={s.aboutMe}>
          <span>
            <b>Status: </b>
            {status || "------"}
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.aboutMe}>
          <span>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
