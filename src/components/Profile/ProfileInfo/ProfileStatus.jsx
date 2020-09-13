import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }

  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div onClick={this.activateEditMode.bind(this)} className={s.aboutMe}>
            <span>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.aboutMe}>
            <span>
              <input
                autoFocus={true}
                onBlur={this.deactivateEditMode.bind(this)}
                value={this.props.status}
              />
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
