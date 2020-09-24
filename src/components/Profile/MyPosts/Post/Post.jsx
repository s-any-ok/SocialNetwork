import React from "react";
import s from "./Post.module.css";
import user from "../../../../assets/img/user.png";

const Post = (props) => {
  return (
    <div>
      <div className={s.posts}>
        <div className={s.post}>
          <img alt="user" src={user} />
          {props.message}
        </div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
