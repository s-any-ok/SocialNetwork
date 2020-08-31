import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="How are you boy?" likes="10" />
        <Post message="I know Raect!" likes="8" />
      </div>
    </div>
  );
};

export default MyPosts;
