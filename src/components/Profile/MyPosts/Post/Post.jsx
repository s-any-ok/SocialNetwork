import React from "react";
import s from "./Post.module.css";
import user from "../../../../assets/img/user.png";

const Post = ({ message, likes }) => {
  return (
    <div>
      <div className={s.posts}>
        <div className={s.post}>
          <img alt="user" src={user} />
          {message}
        </div>
        <span>Like {likes}</span>
      </div>
    </div>
  );
};

export default Post;
