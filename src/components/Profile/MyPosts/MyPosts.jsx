import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));

  const postInfo = React.createRef();

  const addPost = () => {
    props.addUser();
    props.onPostChange("");
  };

  const onPostTextChange = () => {
    const text = postInfo.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={postInfo}
            onChange={onPostTextChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
