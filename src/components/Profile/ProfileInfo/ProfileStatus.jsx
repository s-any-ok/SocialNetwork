import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div onClick={this.activateEditMode} className={s.aboutMe}>
            <span>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.aboutMe}>
            <span>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                value={this.state.status}
              />
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
