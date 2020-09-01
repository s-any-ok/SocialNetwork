import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "How are you boy?", likes: 10 },
    { id: 2, message: "I know Raect!", likes: 8 },
    { id: 3, message: "How are you boy?", likes: 0 },
    { id: 4, message: "I know Raect!", likes: 18 },
  ];

  const postsElements = postsData.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
