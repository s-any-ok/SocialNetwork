import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.posts}>
        <div className={s.post}>
          <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
          {props.message}
        </div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
